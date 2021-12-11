import React, { Fragment } from 'react'
import Profile from './components/Profile/Profile'
import user from './data/user.json'
import Statistics from './components/Statistics/Statistics'
import data from './data/data.json'
import FriendsList from './components/FriendsList/FriendList'
import friends from './data/friends.json'
import TransactionHistory from './components/TransactionHistory/TransactionHistory'
import transactions from './data/transactions.json'

export default function App() {
    return (
        <Fragment>
            <div className="container">
                <Profile
                    username={user.username}
                    tag={user.tag}
                    location={user.location}
                    avatar={user.avatar}
                    stats={user.stats}
                />
            </div>

            <div className="container">
                <Statistics
                    title="Upload stats"
                    stats={data}
                />
            </div>

            <div className="container">
                <FriendsList
                    friends={friends}
                />
            </div>

            <div className="container">
                <TransactionHistory
                    items={transactions}
                />
            </div>
        </Fragment>
    )
}
