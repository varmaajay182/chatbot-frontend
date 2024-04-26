import React from 'react'

function Sidebar() {
  return (
    <div>
      <nav id="sidebar">
            <div className="float-top">
                <div className="sidebar-controls">
                    <button className="new-chat"><i className="fa fa-plus"></i> New chat</button>
                    <button className="hide-sidebar"><i className="fa fa-chevron-left"></i></button>
                </div>
                <ul className="conversations">
                    <li className="grouping">Today</li>
                    <li className="active">
                        <button className="conversation-button"><i className="fa fa-message fa-regular"></i> This is a conversation title</button>
                        <div className="fade"></div>
                        <div className="edit-buttons">
                            <button><i className="fa fa-edit"></i></button>
                            <button><i className="fa fa-trash"></i></button>
                        </div>
                    </li>

                </ul>
            </div>
            <div className="user-menu">
                <button>
                    <i className="user-icon">u</i>
                    username
                    <i className="fa fa-ellipsis dots"></i>
                </button>
                <ul>
                    <li><button>My plan</button></li>
                    <li><button>Custom instructions</button></li>
                    <li><button>Settings &amp; Beta</button></li>
                    <li><button>Log out</button></li>
                </ul>
            </div>
        </nav>
    </div>
  )
}

export default Sidebar
