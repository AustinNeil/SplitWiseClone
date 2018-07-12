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
					<div className="transaction-header">
						April 2018
					</div>
				{this.state.transactions.map(((transaction) =>
					<div className="single-transaction-container" key={'${transaction.id}'}>
							<div className="transaction-date">
								{transaction.date}
							</div>
							<div className="transaction-title">
								{transaction.title}
							</div>
							<div className="transaction-paid-by-container">
								<div className="transaction-paid-by">
									{transaction.paidBy}
								</div>
								<div className="transaction-paid-by-amount">
									{transaction.amount}
								</div>
							</div>
							<div className="transaction-owed-to-container">
								<div className="transaction-owed-to">
									Austin
								</div>
								<div className="transaction-owed-to-amount">
									100.00
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
				<div className="dashboard-header">
					<h1 className="dashboard-user">Ada Lovelace</h1>
					<button className="button addBillButton">Add a bill </button>
					<button className="button settleButton">Settle Up </button>
				</div>
				<TransactionHistory />
			</div>
			)
	}
}

class Summary extends React.Component {
	render() {
		return(
			<div className="summary">
				<div className="sort-icon-list">
					<div className="summary-sort-icon">icon 1</div>
					<div className="summary-sort-icon">icon 2</div>
					<div className="summary-sort-icon">icon 3</div>
					<div className="summary-sort-icon">icon 4</div>
				</div>
				<div className="balance-header">YOUR BALANCE</div>
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
					<div className="menu-item">Dashboard</div>
					<div className="menu-item">All Expenses</div>
					<div className="menu-item add-friend">Add Friends + Add</div>
					<div className="menu-item">Ada Lovelace</div>
					<div className="menu-item">Harry Houdini</div>
					<div className="menu-item">Marcel Proust</div>
					<div className="menu-item">Nellie Bly</div>
					<div className="menu-item">Wilbur Wright</div>
			</div>
			)
	}
}

class Title extends React.Component {
	render() {
		return(
			<div className="title-bar">
				<div className="siteTitle">
					<h2>SPLITWISE</h2>
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