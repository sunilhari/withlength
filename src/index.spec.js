import chai from 'chai';
import path from 'path';
import withLength from './index';
chai.should();

describe('With Length',()=>{
    let sourceArray = ['Hello','World','Do','Well'],
        notAnArray = "Hello World!";
    it('Expects to return the string of length 4  from array',()=>{
        withLength(sourceArray,4).string.should.eql(['Well']);
    })
    it('Expects maxlength to be 5  from array',()=>{
        withLength(sourceArray,5).maxlength.should.equal(5);
    })
    it('Expects to return the string of length 5  from array',()=>{
        withLength(sourceArray,5).string.should.eql(['Hello','World']);
    })
})