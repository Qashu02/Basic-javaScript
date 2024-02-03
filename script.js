// program to change sales value in an arrays

let items=[234,54,256,432,12,456];

for(let i = 0 ; i<items.length ; i++){
    let before =items[i];
    let after=items[i]/10;
    
    items[i]=items[i]-after;
    console.log(`The sales ${before} is 10% off ${items[i]}`);
} 