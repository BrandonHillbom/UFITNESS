import React from 'react';
interface IProps {
    showHeader?: boolean
}

export const Layout = ({ children, showHeader = true }: React.PropsWithChildren<IProps>) => {
    return (<div>
        {showHeader && <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="../">UFITNESS</a>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="navbarNavCollapse"
                aria-controls="navbarNavCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNavCollapse">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="../">Home</a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link" href="../journal">Journal<span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="../quiz">Body Type Quiz</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="../progress">Progress Tracker</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#dropdown" id="navbarDropdownMenuLink" role="button"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Resources
                    </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <a className="dropdown-item" href="../nutrition">Nutrition</a>
                            <a className="dropdown-item" href="../exercises">Exercises</a>
                            <a className="dropdown-item" href="../external">External</a>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>}
        <main className='container'>
            {children}
        </main>
    </div>)
}