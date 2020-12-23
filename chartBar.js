const chartsOY = document.querySelector('[data-content="number_of_charts_Oy"]')
const chartsOX = document.querySelector('[data-content="number_of_charts_Ox"]')
const arrCharts = [5,8,2,1,15,2,3,5,9,11,10,4,3,14,1,7,10,3,2,13]

function buildTemplateOY(arr){
    let result = '';
    arr.sort(function (a,b){
        return a-b;
    })
     arr = arr.filter((item, index) => arr.indexOf(item) === index).reverse();
   for(let i = 0; i < arr.length; i++){
       result += `<li><span>${arr[i]}</span></li>`
   }
   return result;
}

function buildtemplateOX(arr){
    let result = '';
    let h = 0;
    for(let i=1; i <= arr.length; i++) {
        h = arr[i-1]*20;
        if(arr[i-1]<=5){
            result += `<li><div class="bar_green" style="height: ${h}px"  data="${arr[i-1]}"></div><span>${i}</span></li>`;
            h=0;
        }
        if(arr[i-1]>5 && arr[i-1]<10){
            result += `<li><div class="bar_yellow" style="height: ${h}px" data="${arr[i-1]}"></div><span>${i}</span></li>`;
            h=0;
        }
        if(arr[i-1]>10){
            result += `<li><div class="bar_red" style="height: ${h}px" data="${arr[i-1]}"></div><span>${i}</span></li>`;
            h=0;
        }
    }
    return result;
}

chartsOX.innerHTML = buildtemplateOX(arrCharts);
chartsOY.innerHTML = buildTemplateOY(arrCharts);