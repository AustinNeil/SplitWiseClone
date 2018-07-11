class TransactionHistory extends React.Component {
	constructor() {
		super()
		this.state = {
			transactions:[]
		}
	}

	componentDidMount() {
		var url="http://demo7283340.mockable.io/TransactionData"
		fetch(url)
		.then(response => {
			return response.json()
		}).then(d => {
			this.setState({transactions: d})
			console.log('state', this.state.transactions)
		}).catch(error => console.log(error))
	}


	render() {
		return(
			<div>
				{this.state.transactions.map(((transaction) =>
					<div key={'${transaction.id}'}>
						<div className="singleTransaction">
							<div className="transactionDate">
								{transaction.date}
							</div>
							<div className="transactionTitle">
								{transaction.title}
							</div>
							<div className="transactionPaidBy">
								{transaction.paidBy}
							</div>
							<div className="transactionAmount">
								{transaction.amount}
							</div>
						</div>
					</div>
					))
			}
			</div>
		)
	}
}

class Dashboard extends React.Component {
	render() {
		return(
			<div className="dashboard">
				<h1>Ada Lovelace</h1>
				<button className="addBillButton">Add a bill </button>
				<button className="settleButton">Settle Up </button>
				<TransactionHistory />
			</div>
			)
	}
}

class Summary extends React.Component {
	render() {
		return(
			<div className="summary">
				<ul>
					<li>icon 1</li>
					<li>icon 2</li>
					<li>icon 3</li>
					<li>icon 4</li>
				</ul>
				<h3>Your Balance</h3>
				<div className="balanceResult">
					<h3>Ada owes you</h3>
					<h1>$69.21</h1>
					<h3>in total</h3>
				</div>
			</div>
			)
	}
}

class Menu extends React.Component {
	render() {
		return (
			<div className="left-align menu">
				<ul>
					<li>Dashbaord</li>
					<li>All Expenses</li>
					<li>Add Friends + Add</li>
					<li>Ada Lovelace</li>
					<li>Harry Houdini</li>
					<li>Marcel Proust</li>
					<li>Nellie Bly</li>
					<li>Wilbur Wright</li>
				</ul>
			</div>
			)
	}
}

class Title extends React.Component {
	render() {
		return(
			<div className="title-bar">
				<div className="siteTitle">
					<h1>Splitwise</h1>
				</div>
				<div className="currentUser">
					<p>XX</p>
					<h2>Nikola Tesla</h2>
				</div>
			</div>
		)
	}
}

class App extends React.Component {
	constructor() {
		super()
	}

	render() {
		return (
			<div className="appContainer">
			<Title />
				<div className="flex-container">
					<Menu />
					<Dashboard />
					<Summary />
				</div>
			</div>
			)
	}
}

ReactDOM.render(<App />, document.getElementById('root'));