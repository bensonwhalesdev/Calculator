let getVal;
    let oper = '';
    let canClear = false;


    function btnClear() {
        secondInp.value = '';
        firstInp.value = '';
    };
    function btnClean(){
        secondInp.value = '';
    };
    function del() {
        secondInp.value = secondInp.value.slice(0, -1);
    };
    function displayNumber(num) {
        secondInp = document.getElementById('secondInp');
        if (canClear) {
            secondInp.value = '';
            canClear = false;
        }
        secondInp.value += num;
    };
    function operator(operator) {
        getVal = secondInp.value;
        oper = operator;
        canClear = true;
        firstInp.value = getVal + oper;
    };
    function getAns() {
        if (oper === '+') {
            firstInp.value = getVal + ' + ' + secondInp.value + ' = ';
            secondInp.value = Number(getVal) + Number(secondInp.value);
        }; if (oper === '-') {
            firstInp.value = getVal + ' - ' + secondInp.value + ' = ';
            secondInp.value = Number(getVal) - Number(secondInp.value);
        }; if (oper === '*') {
            firstInp.value = getVal + ' x ' + secondInp.value + ' = ';
            secondInp.value = Number(getVal) * Number(secondInp.value);
        }; if (oper === '÷') {
            firstInp.value = getVal + ' ÷ ' + secondInp.value + ' = ';
            secondInp.value = Number(getVal) / Number(secondInp.value);
        }; if (oper === '√') {
            firstInp.value = ' √ ' + getVal + ' = ';
            secondInp.value = Number(Math.sqrt(getVal));
        }; if (oper === '/1') {
            firstInp.value = getVal + ' /1 ' + ' = ';
            secondInp.value = Number(1 / getVal);
        }; if (oper === '^') {
            firstInp.value = getVal + ' ^ ' + secondInp.value + ' = ';
            secondInp.value = getVal * secondInp.value;
        }; if (oper === '%') {
            firstInp.value = getval + ' % ' + secondInp.value + ' = ';
            secondInp.value = getVal % secondInp.value;
        };
    };
