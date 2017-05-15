class Person {
    constructor(public name: string,
                public age: number,
                public memo: string) {
    }
}

class AppViewModel {
    public list: KnockoutObservableArray<Person>;
    public selected: KnockoutObservable<Person>;

    constructor() {

        this.list = ko.observableArray<Person>();
        this.selected = ko.observable<Person>();

        for (var i = 0; i < 10; i++) {
            this.list.push(new Person("hoge" + i + "さん", i, "..."));
        }



        // 最初の要素を選択しておく
        this.selected(this.list()[0]);
    }
}

window.onload = () => {
    var viewmodel = new AppViewModel();
    ko.applyBindings(viewmodel);
};