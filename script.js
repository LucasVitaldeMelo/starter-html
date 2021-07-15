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
    incomes() {
        //somar as entradas
    },
    expenses() {
        //somar as saídas
    },

    total() {
        //entrada - saídas
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

        const amount = transaction.

        const html = `
        <td class="description">${transaction.description}</td>
        <td class="${CSSclass}">${transaction.amount}</td>
        <td class="date">${transaction.date}</td>
        <td>
            <img src="./assets/minus.svg" alt="Remover trasação">
        </td>
       `

       return html
    }
}

const Ultils

transactions.forEach(function(transaction) {
    DOM.addTransaction(transaction)
})