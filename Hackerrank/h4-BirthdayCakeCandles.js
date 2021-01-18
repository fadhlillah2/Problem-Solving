function birthdayCakeCandles(candles) {
    var maxNumb = Math.max(...candles);  //mencari nilai max dari suatu array
    var maxNumbCount = 0;  //dideklarasi dengan nilai kosong
    for(var i = 0; i < candles.length; i++){
        if (candles[i] == maxNumb){             //berarti bahwa cari anggota dari array yang bernilai sama
            maxNumbCount = maxNumbCount + 1;    
        }
    }
    console.log(maxNumbCount);
    return maxNumbCount;
  
}