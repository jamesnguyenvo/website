import React, { Component } from 'react';

class Projects extends Component {
    render() {
        return(
            <section id='projects'>
                <div className='row'>
                        <div className='col-md-4'>
                            
                            <h1 className='title'>
                                <i class="fa fa-github fa-lg"></i> 
                                <a className='repo' href='https://github.com/jamesnguyenvo/group-project-cmput404'>
                                    Connectify
                                </a>
                            </h1>
                        </div>
                        <div className='col-md-4'>
                            <h2>Django Social Web Application</h2>
                            <h3 className='date'>January - April 2019</h3>
                            <ul className='info'>
                                <li>Create a profile, add friends, create posts, like, and comment on other posts</li>
                                <li>Developed our own API in order interact with several other groups</li>
                                <li>Utilized Github API to import Github activity onto Connectify's feed</li>
                                <li><a href='https://www.youtube.com/watch?v=thaDP-9Qz3g'>Video Demo</a></li>
                            </ul>
                        </div>
                </div>
                <div className='row'>
                        <div className='col-md-4'>
                            <h1 className='title'>
                                <i class="fa fa-github fa-lg"></i>
                                <a className='repo' href='https://github.com/jamesnguyenvo/H4bit'> 
                                    H4BIT
                                </a>
                            </h1>
                        </div>
                        <div className='col-md-4'>
                            <h2>Java Android Application</h2>
                            <h3 className='date'>September - December 2017</h3>
                            <ul className='info'>
                                <li>Create daily/weekly tasks to build habits</li>
                                <li>Follow others to keep track of and interact with their habits</li>
                                <li>Implemented Elasticsearch to provide search and online functionality</li>
                                <li><a href='https://www.youtube.com/watch?v=_XTTmBgx-RY'>Video Demo</a></li>
                            </ul>
                        </div>
                </div>
                <div className='row'>
                        <div className='col-md-4'>
                            <h1 className='title'>
                            <i class="fa fa-github fa-lg"></i>
                                <a className='repo' href='https://github.com/jamesnguyenvo/smashRanking'>
                                    Ranking Manager
                                    </a>
                                </h1>
                        </div>
                        <div className='col-md-4'>
                            <h2>Python Ranking Application</h2>
                            <h3 className='date'>May - August 2017</h3>
                            <ul className='info'>
                                <li>Applied Glicko2 rating system in conjunction with tournament data obtained via challonge.com API in order to update and maintain player
                                    rankings
                                </li>
                                <li>Main tool used for ranking of players in Edmonton and Calgary for Super Smash Bros. games</li>
                            </ul>
                        </div>
                </div>
            </section>
        )
    }
}

export default Projects;