// Formats numbers to Billion / Million / Thousands(K) representations
const NumFormatter = (num) =>{
    if(num > 1000000000){
        return (num/1000000000).toFixed(1) + 'B'; // convert to B for number from > 1 Billion 
    }
    else if(num > 1000000){
        return (num/1000000).toFixed(1) + 'M'; // convert to M for number from > 1 million 
    }
    else if(num > 999 && num < 1000000){
        return (num/1000).toFixed(1) + 'K'; // convert to K for number from > 1000 < 1 million 
    }

    else if(num <= 999){
        return num; // if value < 1000, nothing to do
    }
};


export default NumFormatter;
