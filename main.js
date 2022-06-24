function task_1() {
    const user = {
        userName: 'Vlad',
        age: 13,
        showUserName() {
            console.log(this.userName);
        },
        updateAge() {
            this.age += 1;
        }
    }
}

function task_2() {
    const salaries = {
        John: 100,
        Ann: 160,
        Pete: 130,
    }
    let sum = 0;
    for (const salary of Object.values(salaries)) {
        sum += salary;
    }
    console.log(sum);
}

function task_3() {
    const calculator = {
        read(a, b) {
            this.a = a;
            this.b = b;
        },
        sum() {
            return this.a + this.b;
        },
        mult() {
            return this.a * this.b;
        }
    }
    calculator.read(4,5);
    console.log(calculator.sum())
    console.log(calculator.mult())
}

function task_4(){
    const cafe= {
        name: "Republic",
        width:200,
        height: 300,
        personal:5,
        hr: true }
        // task a
        for(const pare of Object.entries(cafe)){
            console.log(pare);
        }
        // task b
        console.log(cafe.height * cafe.width);
}
task_4();