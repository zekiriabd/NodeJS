import "jest";

const name = "Zekir"
console.log("================");
console.log(name.length);
console.log(name[0]);
console.log("================");

describe("User Name Testing : " , () => {

    it("The length is not equal (6)",()=>{
        expect(name.length).toEqual(6);
     });  


     it("The first letter is not match with (I)",()=>{
        expect(name[0]).toMatch("I");
    }); 
    
    it("The first letter est === I",()=>{
        expect(name[0] === "I").toBeTruthy();
     });

});
