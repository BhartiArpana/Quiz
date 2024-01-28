const question=[
    {
     'que':'Javascript is an _______ language?',
     'a' : 'Object Oriented',
     'b' : 'Object-based',
     'c' : 'procedural',
     'd' : 'None of above',
     'correct' : 'a'
    },
    {
        'que':' Which of the following keywords is used to define a variable in Javascript?',
        'a' : 'Var',
        'b' : 'Let',
        'c' : 'Both a and b',
        'd' : 'None of above',
        'correct' : 'c'
       },
       {
        'que':'Which of the following methods is used to access HTML elements using Javascript?',
        'a' : 'getElementById',
        'b' : 'getElementByClassName',
        'c' : 'a and b both',
        'd' : 'None of above',
        'correct' : 'a'
       },
       {
        'que':' Which of the following methods can be used to display data in some form using Javascript?',
        'a' : 'document.write()',
        'b' : 'console.log()',
        'c' : 'windows.log()',
        'd' : 'None of above',
        'correct' : 'b'
       },
       {
        'que':'What keyword is used to check whether a given property is valid or not?',
        'a' : 'in',
        'b' : 'is in ',
        'c' : 'exists',
        'd' : 'None of above',
        'correct' : 'a'
       },
       {
        'que':'When an operator’s value is NULL, the typeof returned by the unary operator is:',
        'a' : 'Boolean',
        'b' : 'Undefined',
        'c' : 'Object',
        'd' : 'None of above',
        'correct' : 'c'
       },
       {
        'que':'Which of the following are closures in Javascript?',
        'a' : 'Function',
        'b' : 'Object',
        'c' : 'Variable',
        'd' : 'All of above',
        'correct' : 'd'
       },
       {
        'que':' What keyword is used to declare an asynchronous function in Javascript?',
        'a' : 'async',
        'b' : 'await',
        'c' : 'setTimeOut',
        'd' : 'None of above',
        'correct' : 'a'
       },
       {
        'que':'How do we write a comment in javascript?',
        'a' : '//',
        'b' : '/**/',
        'c' : '#',
        'd' : '$$',
        'correct' : 'a'
       },
       {
        'que':'Which of the following are not server-side Javascript objects?',
        'a' : 'Date',
        'b' : 'File Upload',
        'c' : 'Function',
        'd' : 'all of above',
        'correct' : 'd'
       }
] 
let index=0;
let total=question.length;
let right=0,wrong=0;
let optionInputs=document.querySelectorAll(".options");
let quesBox=document.getElementById("quesBox");
const loadQuestion=()=>{
    if(index===total)
    {
        endQuiz();
    }
    reset();
    let data=question[index];
    quesBox.innerText=`${index+1}) ${data.que}`;
    optionInputs[0].nextElementSibling.innerText=data.a;
    optionInputs[1].nextElementSibling.innerText=data.b;
    optionInputs[2].nextElementSibling.innerText=data.c;
    optionInputs[3].nextElementSibling.innerText=data.d;
}

const submitQuiz=()=>{
    
      const ans=getAnswer() 
     const data=question[index];
     if(ans===data.correct)
     {
       right++;

     }
     else{
       wrong++;
     }
     index++;
     loadQuestion();
}

const getAnswer=()=>{
    let answer;
    optionInputs.forEach(
        (input)=>{
            if(input.checked){
                answer=input.value;
            }
            
        }
    )
    return answer;
}
const reset=()=>{
    optionInputs.forEach(
        (input)=>{
            
           input.checked=false; 
        }
    )
}
const endQuiz=()=>{
    document.getElementById("box").innerHTML=`
    <h2>Thank you for playing Quiz</h2>
    <h3>${right}/${total} is correct</h3>
    `
}
loadQuestion();