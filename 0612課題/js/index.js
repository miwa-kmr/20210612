    let count = 100;


    for (i = 1; i <= count; i++) {
        if (i % 2 === 0) {

            if (i % 3 === 0 && i % 5 === 0) {
                console.log(i + "回目:" + "あほわん");
            } else if (i % 3 === 0) {
                console.log(i + "回目:" + "あほ");
            } else if (i % 5 === 0) {
                console.log(i + "回目:" + "わん");
            } else {
                console.log(i + "回目:");
            }
        }
    }