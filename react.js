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

	formatName = (orig) => {
		return orig.substring(0,6)
	}

	formatDate = (date) => {

		let dateStr = new Date(date)
		let dayOfMonth = dateStr.getDate()
		let months = ["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"]
		let monthStr = months[dateStr.getMonth()]
		if(dayOfMonth.toString().length < 2){
			dayOfMonth = "0" + dayOfMonth
		}
		return (
			<div className="transaction-paid-by">
				<div className="date-month">
					{monthStr}
				</div>
				<div className="date-day">
					{dayOfMonth}
				</div>
			</div>
		)
	}

	render() {
		return(
			<div>
					<div className="transaction-header">
						April 2018
					</div>
				{this.state.transactions.map(((transaction) =>
					<div className="single-transaction-container" key={transaction.id}>
							<div className="transaction-date">
								
								{this.formatDate(transaction.date)}
							</div>
							<div className="transaction-title">
								{transaction.title}
							</div>
							<div className="transaction-paid-by-container">
								{this.formatName(transaction.paidBy)} paid
								<div className="transaction-paid-by-amount">
									 {transaction.amount}
								</div>
							</div>
							<div className="transaction-owed-to-container">
								<div className="transaction-owed-to">
									Austin owes
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
					<div className="summary-sort-icon"><i className="fas fa-bars"></i></div>
					<div className="summary-sort-icon"><i className="fas fa-calendar-alt"></i></div>
					<div className="summary-sort-icon"><i className="fas fa-chart-bar"></i></div>
					<div className="summary-sort-icon"><i className="fas fa-cog"></i></div>
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
	constructor() {
		super()
		// this.state({ activeItem: ''})
		// this.toggleActiveItem = this.toggleActiveItem.bind(this)
	}

	// toggleActiveItem() {
	// 	this.setState({ activeItem: this})
	// }

	render() {
		return (
			<div className="left-align menu">
					<div className="menu-buttons">
						<div className="menu-item"><i className="fas fa-square"></i> Dashboard</div>
						<div className="menu-item"><i className="fas fa-list"></i> All Expenses</div>
					</div>
					<div className="menu-item add-friend">Add Friends <i className="fas fa-user-plus"></i></div>
					<div className="friends-available">
						<div className="menu-item active-menu-selection"><i className="fas fa-user"></i> Ada Lovelace</div>
						<div className="menu-item"><i className="fas fa-user"></i> Harry Houdini</div>
						<div className="menu-item"><i className="fas fa-user"></i> Marcel Proust</div>
						<div className="menu-item"><i className="fas fa-user"></i> Nellie Bly</div>
						<div className="menu-item"><i className="fas fa-user"></i> Wilbur Wright</div>
					</div>
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

ReactDOM.render((
	<ReactRouterDOM.BrowserRouter>
		<App />
	</ReactRouterDOM.BrowserRouter>), document.getElementById('root'));