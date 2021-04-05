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

const transaction = [
    {
        id: 01,
        description: 'Luz',
        amount: -50000,
        date: '23/01/2021',
    },
    {
        id: 01,
        description: 'Website',
        amount: 500000,
        date: '23/01/2021',
    },
    {
        id: 01,
        description: 'Internet',
        amount: -20000,
        date: '23/01/2021',
    },
]

const Transaction = {
    incomes() {
        //somar as entradas
    },
    expenses() {
        //somar as saídas
    }

    total() {
        //entrada - saídas
    }


}

const DOM = {
    innerHTMLtransactions() {
        const html = `
        <tr>
            <td class="description">Luz</td>
            <td class="expense">- R$ 500,00</td>
            <td class="date">23/01/2021</td>
            <td>
                <img src="./assets/minus.svg" alt="Remover trasação">
            </td>
        </tr>
        `
    }
}