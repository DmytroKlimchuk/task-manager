import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
        <div className="page">
            <nav className="navbar navbar-inverse">
                <div className="container">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand" href="#">Task manager</a>
                    </div>
                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav">
                            <li className="active"><a href="#">Link <span className="sr-only">(current)</span></a></li>
                            <li><a href="#">Link</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
            <main className="main container">
                <div className="row">
                    <div className="col-xs-12 col-md-6">
                        <div className="items-wrapper block">
                            <h2>Items</h2>

                            <form className="form-inline addNew">
                                <div className="row">
                                    <div className="col-sm-9">
                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder="Type name here ..." />
                                        </div>
                                    </div>
                                    <div className="col-sm-3">
                                        <button type="submit" className="btn btn-info add">Add new</button>
                                    </div>
                                </div>
                            </form>

                            <div className="items">

                                <div className="item">
                                    <div className="row">
                                        <div className="col-sm-9">
                                            <div className="item__title">
                                                <p>first item name <span className="badge">3</span></p>
                                            </div>
                                        </div>
                                        <div className="col-sm-3">
                                            <button className="btn btn-default" type="submit">Delete</button>
                                        </div>
                                    </div>
                                </div>


                                <div className="item">
                                    <div className="row">
                                        <div className="col-sm-9">
                                            <div className="item__title">
                                                <p>second item name <span className="badge">7</span></p>
                                            </div>
                                        </div>
                                        <div className="col-sm-3">
                                            <button className="btn btn-default" type="submit">Delete</button>
                                        </div>
                                    </div>
                                </div>

                                <div className="item">
                                    <div className="row">
                                        <div className="col-sm-9">
                                            <div className="item__title">
                                                <p>third item name <span className="badge">4</span></p>
                                            </div>
                                        </div>
                                        <div className="col-sm-3">
                                            <button className="btn btn-default" type="submit">Delete</button>
                                        </div>
                                    </div>
                                </div>


                            </div>

                        </div>
                    </div>
                    <div className="col-xs-12 col-md-6">
                        <div className="comments-wrapper block">
                            <h2>Comments</h2>
                            <h3 className="subtitle"></h3>

                            <div className="comments">


                                <div className="comment">
                                    <div className="comment__ava"></div>
                                    <div className="comment__txt">
                                        Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона
                                    </div>
                                </div>


                                <div className="comment">
                                    <div className="comment__ava"></div>
                                    <div className="comment__txt">
                                        Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона
                                    </div>
                                </div>

                                <div className="comment">
                                    <div className="comment__ava"></div>
                                    <div className="comment__txt">
                                        Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона
                                    </div>
                                </div>


                            </div>

                            <form action="#" method="POST" className="addPost">
                                <div className="comment">
                                    <div className="users">
                                        <input type="radio" name="users" id="user1" value="1" /><label htmlFor="user1">Користувач 1</label>
                                            <input type="radio" name="users" id="user2" value="2" /><label htmlFor="user2">Користувач 2</label>
                                                <input type="radio" name="users" id="user3" value="3" /><label htmlFor="user3">Користувач 3</label>
                                    </div>
                                    <div className="comment__ava"></div>
                                    <div className="comment__txt">
                                        <textarea id="message" name="message"></textarea>
                                    </div>
                                </div>
                            </form>

                        </div>
                    </div>

                </div>
            </main>
        </div>
    );
  }
}

export default App;
