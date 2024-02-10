let audio_number = { 1: '倫ちゃん_1', 2: '倫ちゃん_2', 3: '好き', 4: '大好きだよ', 5: 'まぁまぁまぁ', 6: '大丈夫', 7: 'チュ', 8: 'ギュー' };

let save_output;

const showMessage = () => {
    const textbox = document.getElementById("input-message");
    const inputValue = textbox.value;

    let array = inputValue.split(",");
    let input_array = [];
    //テキストボックスの値を使って、出力するメッセージを生成する
    for (let i = 0; i < array.length; i++) {
        input_array.push(array[i]);
        array[i] = audio_number[array[i]];
    }
    var output = array.join('-');
    //出力用のp要素にメッセージを表示
    save_output = output;
    document.getElementById("output-message").innerHTML = output;

    const serializedArray = JSON.stringify(input_array);
    localStorage.setItem('save_point', serializedArray);
}


const saveMessage_1 = () => {
    const serializedArray = localStorage.getItem('save_point');
    const input_array_1 = JSON.parse(serializedArray);
    console.log(input_array_1);
    
    const serializedArray_1 = JSON.stringify(input_array_1);
    localStorage.setItem('save_point_1', serializedArray_1);

    const text = save_output;
    document.getElementById("rep_1").textContent = text;
}
const saveMessage_2 = () => {
    const serializedArray = localStorage.getItem('save_point');
    const input_array_2 = JSON.parse(serializedArray);
    console.log(input_array_2);
    const serializedArray_2 = JSON.stringify(input_array_2);
    localStorage.setItem('save_point_2', serializedArray_2);

    const text = save_output;
    document.getElementById("rep_2").textContent = text;
}
const saveMessage_3 = () => {
    const serializedArray = localStorage.getItem('save_point');
    const input_array_3 = JSON.parse(serializedArray);
    console.log(input_array_3);
    const serializedArray_3 = JSON.stringify(input_array_3);
    localStorage.setItem('save_point_3', serializedArray_3);

    const text = save_output;
    document.getElementById("rep_3").textContent = text;
}






async function repMesssage_1() {
    const serializedArray = localStorage.getItem('save_point_1');
    const input_array_1 = JSON.parse(serializedArray);
    console.log(input_array_1);
    for (const i of input_array_1) {
        await new Promise((resolve) => {
            const sound = new Audio("../material/audio_material/" + audio_number[i] + ".mp3");
            sound.play();
            sound.addEventListener('ended', async () => {
                resolve();
            }, { once: true });
        });
    }
}
async function repMesssage_2() {
    const serializedArray = localStorage.getItem('save_point_2');
    const input_array_2 = JSON.parse(serializedArray);
    console.log(input_array_2);
    for (const i of input_array_2) {
        await new Promise((resolve) => {
            const sound = new Audio("../material/audio_material/" + audio_number[i] + ".mp3");
            sound.play();
            sound.addEventListener('ended', async () => {
                resolve();
            }, { once: true });
        });
    }
}
async function repMesssage_3() {
    const serializedArray = localStorage.getItem('save_point_3');
    const input_array_3 = JSON.parse(serializedArray);
    console.log(input_array_3);
    for (const i of input_array_3) {
        await new Promise((resolve) => {
            const sound = new Audio("../material/audio_material/" + audio_number[i] + ".mp3");
            sound.play();
            sound.addEventListener('ended', async () => {
                resolve();
            }, { once: true });
        });
    }
}










const displayMesssage_1 = () => {
    const serializedArray = localStorage.getItem('save_point_1');
    const input_array_1 = JSON.parse(serializedArray);
    console.log(input_array_1);
    document.getElementById("output-message").innerHTML = input_array_1;
}
const displayMesssage_2 = () => {
    const serializedArray = localStorage.getItem('save_point_2');
    const input_array_2 = JSON.parse(serializedArray);
    console.log(input_array_2);
    document.getElementById("output-message").innerHTML = input_array_2;
}
const displayMesssage_3 = () => {
    const serializedArray = localStorage.getItem('save_point_3');
    const input_array_3 = JSON.parse(serializedArray);
    console.log(input_array_3);
    document.getElementById("output-message").innerHTML = input_array_3;
}


