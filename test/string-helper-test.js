import { renameKeys, pascalCase } from '../lib/string-helper.js';

const data = {
  ChargebackId: 2,
  ChargebackType: 4,
  BrandId: {
    Name: 'MasterCard',
    Value: '2',
    Description: {
      ChargebackType: {
        LevelFar: 'far',
      },
    },
  },
};

const otherData = {
  ChargebackId: 1,
  ChargebackType: 2,
  BrandId: {
    Name: 'MasterCard',
    Value: '2',
    Description: {
      ChargebackType: {
        LevelFar: 'far far',
      },
    },
  },
};

describe('helper.renameKeys', () => {
  it('should return a string without/invalid params', (done) => {
    const result = renameKeys(0);

    result.should.equal(0);
    done();
  });

  it('should return a string', (done) => {
    const result = renameKeys('snake case');

    result.should.equal('snake case');
    done();
  });

  it('should return an object', (done) => {
    const result = renameKeys(data);

    result.should.be.an.Object();
    done();
  });

  it('should rename the first level', (done) => {
    const result = renameKeys(data);

    result.should.have.property('chargeback_id');
    result.should.have.property('chargeback_type');
    result.should.have.property('brand_id');
    done();
  });

  it('should return correct values in the first level', (done) => {
    const result = renameKeys(data);

    result.chargeback_id.should.equal(data.ChargebackId);
    result.chargeback_type.should.equal(data.ChargebackType);
    done();
  });

  it('should return an object as value', (done) => {
    const result = renameKeys(data);

    result.brand_id.should.be.an.Object();
    done();
  });

  it('should rename the second level', (done) => {
    const result = renameKeys(data);
    const brand = result.brand_id;

    brand.should.have.property('name');
    brand.should.have.property('value');
    brand.should.have.property('description');
    done();
  });

  it('should return correct values in the second level', (done) => {
    const result = renameKeys(data);
    const brand = result.brand_id;
    const dataBrand = data.BrandId;

    brand.name.should.equal(dataBrand.Name.toString());
    brand.value.should.equal(dataBrand.Value.toString());
    done();
  });

  it('should rename the level n', (done) => {
    const result = renameKeys(data);

    result.brand_id.description.chargeback_type
      .should.have.property('level_far');
    done();
  });

  it('should return the correct value in the level n', (done) => {
    const result = renameKeys(data);

    result.brand_id.description.chargeback_type.level_far.should.equal('far');
    done();
  });

  it('should return boolean true', (done) => {
    const result = renameKeys({ BooleanTrue: true });

    result.boolean_true.should.be.a.Boolean();
    result.boolean_true.should.equal(true);
    done();
  });

  it('should return boolean false', (done) => {
    const result = renameKeys({ BooleanTrue: false });

    result.boolean_true.should.be.a.Boolean();
    result.boolean_true.should.equal(false);
    done();
  });

  it('should accept a function as arg', (done) => {
    const obj = {
      BIG_CONST: 1,
      snake_case: 2,
      camelCase: 3,
      PascalCase: 4,
    };

    const result = renameKeys(obj, pascalCase);
    result.BigConst.should.equal(1);
    result.SnakeCase.should.equal(2);
    result.CamelCase.should.equal(3);
    result.PascalCase.should.equal(4);
    done();
  });
});

describe('helpers.renameKeys (array)', () => {
  const dataArray = [data, otherData];

  it('should return an array', (done) => {
    const result = renameKeys(dataArray);

    result.should.be.an.Array();
    done();
  });

  it('should convert all elements', (done) => {
    const result = renameKeys(dataArray);

    result[0].should.have.property('chargeback_id');
    result[1].should.have.property('chargeback_id');
    result[0].brand_id.description.chargeback_type
      .should.have.property('level_far');
    result[1].brand_id.description.chargeback_type
      .should.have.property('level_far');
    done();
  });
});

describe('helpers.pascalCase', () => {
  it('should return data if it is not a string', (done) => {
    pascalCase(true).should.be.true();
    pascalCase(10).should.equal(10);
    pascalCase({}).should.be.an.Object();
    pascalCase([]).should.be.an.Array();
    done();
  });

  it('should return PascalCase', (done) => {
    pascalCase('pascal_case').should.equal('PascalCase');
    pascalCase('pascalCase').should.equal('PascalCase');
    pascalCase('pascal case').should.equal('PascalCase');
    pascalCase('Pascal Case').should.equal('PascalCase');
    pascalCase('PASCAL_CASE').should.equal('PascalCase');
    done();
  });
});
