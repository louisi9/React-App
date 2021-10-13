import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './components/header.jsx';
import Home from './screens/home.jsx'
import Client from './screens/Client.jsx';
import OurWork from './screens/OurWork.jsx'
import {ApolloProvider, ApolloClient, InMemoryCache} from '@apollo/client'
import Footer from './components/Footer.jsx';
import BlogPage from './screens/Blog.jsx';
import GoToTop from './components/GoToTop.jsx';
import WhoWeAre from './screens/WhoWeAre';
import BlogArchive from './screens/BlogArchive'

const client = new ApolloClient({
	uri: 'http://localhost:1337/graphql',
	cache: new InMemoryCache()

})

window.currentAddress = 'http://localhost:1337'
window.reactAddress = 'http://localhost:3000'

function App() {
	return (
		<Router>
			<ApolloProvider client={client}>
				<div className="App">
					<Header />
					<div className="page-content">
						<Switch>
							<Route exact path='/'>
								<Home />
							</Route>
							<Route exact path='/our-work/'>
								<OurWork />
							</Route>
							<Route exact path='/who-we-are/'>
								<WhoWeAre />
							</Route>
							<Route path='/clients/:id'>
								<Client />
							</Route>
							<Route exact path='/blog-archive/'>
								<BlogArchive />
							</Route>
							<Route path='/blog/:id'>
								<BlogPage />
							</Route>
						</Switch>
					</div>
					<Footer />
					<GoToTop />
				</div>
			</ApolloProvider>
		</Router>
	);
}

export default App;
