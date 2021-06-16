class Accordion{
    constructor(accordionListQuestion) {
        this.addcordionListQuestion = document.querySelectorAll(accordionListQuestion);
        this.activeItemClass = "active";
    }

    toggleAccordion(item) {
        item.classList.toggle();
        item.nextElementSibling.classList.toggle(this.activeItemClass);
    }

    addAccordionEvent() {
        this.accordionListQuestion.forEach((question) => {
            question.addEventListener("click", () => this.toggleAccordion(question));
        });
    }

    init() {
        if(this.addcordionListQuestion.length) {
            this.addAccordionEvent();
        }

        return this;
    }

}

const accordion = new Accordion(".fraq-question");
accordion.init;