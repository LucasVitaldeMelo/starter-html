 const Modal = {
        open(){
          document
          .querySelector('.modal-overlay')
          .classList
          .add('active')
        },
        close(){
          document
          .querySelector('.modal-overlay')
          .classList
          .remove('active')
        }
}

const transactions = [
    {
        id: 1,
        description: 'Luz',
        amount: -50000,
        date: '23/01/2021',
    },
    {
        id: 1,
        description: 'Website',
        amount: 500000,
        date: '23/01/2021',
    },
    {
        id: 1,
        description: 'Internet',
        amount: -20000,
        date: '23/01/2021',
    },
    {
        id: 4,
        description: 'App',
        amount: 200000,
        date: '23/01/2021',
    },
]

const Transaction = {
    all: transactions,

    add(transaction){
        Transaction.all.push(transaction)

        App.reload()
    },
    incomes() {
        let income = 0;
        Transaction.all.forEach(transaction => {
            if (transaction.amount > 0) {
                income += transaction.amount;
            }
        })
        return income;
    },

    expenses() {
        let expense = 0;
        Transaction.all.forEach(transaction => {
            if (transaction.amount < 0) {
                expense += transaction.amount;
            }
        })
        return expense;
    },

    total() {
        return Transaction.incomes() + Transaction.expenses()
    }
}

const DOM = { 
    transactionsContainer: document.querySelector('#data-table tbody'),

    addTransaction(transaction, index){
        const tr = document.createElement('tr')
        tr.innerHTML = DOM.innerHTMLTransaction(transaction)

        DOM.transactionsContainer.appendChild(tr)
    },
    innerHTMLTransaction(transaction) {
        const CSSclass = transaction.amount > 0 ? "income" : "expense"

        const amount = Ultils.formatCurrency(transaction.amount)

        const html = `
        <td class="description">${transaction.description}</td>
        <td class="${CSSclass}">${amount}</td>
        <td class="date">${transaction.date}</td>
        <td>
            <img src="./assets/minus.svg" alt="Remover trasação">
        </td>
       `

       return html
    },
    updateBalance() {
        document
            .getElementById('incomeDisplay')
            .innerHTML = Ultils.formatCurrency(Transaction.incomes())
        document
            .getElementById('expenseDisplay')
                .innerHTML = Ultils.formatCurrency(Transaction.expenses())
        document
            .getElementById('totalDisplay')
            .innerHTML = Ultils.formatCurrency(Transaction.total())

    },

    clearTransaction(){
        DOM.transactionsContainer.innerHTML = ""
    }
}

const Ultils = {
    formatCurrency(value) {
        const signal = Number(value) < 0 ? "-" : ""

        value = String(value).replace(/\D/g, "")

        value = Number(value) / 100

        value = value.toLocaleString("pt-BR", {
            style: 'currency',
            currency: 'BRL'
        })
        return signal + value
    }
}

const App = {
    init() {
        Transaction.all.forEach(transaction => {
            DOM.addTransaction(transaction)
        })
        
        DOM.updateBalance()
    },
    reload(){
        DOM.clearTransaction()
        App.init()  
    },
}

App.init()