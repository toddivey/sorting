describe('Bubble Sort', function(){
  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });
});


describe('Bubble Sort', function(){
  it('handles an array with numbers', function(){
    expect( bubbleSort([1,2,3]) ).toEqual( [1,2,3] );
  });
});


describe('Bubble Sort', function(){
  it('handles a large array', function(){
    expect( bubbleSort([9, 2, 5, 6, 4, 3, 7, 10, 1, 8]) ).toEqual( [1,2,3,4,5,6,7,8,9,10] );
  });
});
