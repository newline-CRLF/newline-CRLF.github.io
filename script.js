let ans = null;

function games() {
    console.log(`
        ゲーム一覧
        1. 数あてゲーム(kazuate();)
        `);
}

function kazuate() {
    console.log(`
        数あてゲーム
        1. set_number(); // 数字を設定
        2. guess_number(n); // 数字を当てる
        3. reset_game(); // ゲームをリセット
    `);
}

function set_number() {
    ans = Math.floor(Math.random() * 100) + 1; // 1から100のランダムな整数を生成
    console.log(`数字が設定されました。`);
}

function guess_number(n) {
    if (ans === null) {
        console.log(`数字が設定されていません。set_number()を実行してください。`);
        return;
    }
    if (n < 1 || n > 100) {
        console.log(`1から100の範囲で数字を入力してください。`);
        return;
    }
    if (n < ans) {
        console.log(`もっと大きい数字です。`);
    } else if (n > ans) {
        console.log(`もっと小さい数字です。`);
    } else {
        console.log(`正解です！数字は ${ans} でした。ゲームをリセットします。`);
        reset_game();
    }
}

function reset_game() {
    ans = null; // 数字をリセット
    console.log(`ゲームがリセットされました。set_number()を実行して新しい数字を設定してください。`);
}