import React, { useState } from "react";
import "./Navbar.css";
import { ReactComponent as Logo } from "../assests/icons_FEtask/down.svg"; // Import your SVG

function Navbar({ onGroupChange, onSortChange }) {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    return (
        <nav className="navbar">
            <div className="navbar-menu">
                <button
                    className="dropdown-button"
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                >
                    Display
                    <Logo className="dropdown-icon" /> {/* Use the SVG icon */}
                </button>

                {isDropdownOpen && (
                    <div className="dropdown-menu">
                        <div className="subdropdown-menu">
                            <div className="subdropdown-group">
                                <h3>Grouping</h3>
                                <div className="group">
                                    <button
                                        onClick={() => onGroupChange("status")}
                                    >
                                        Status
                                        <Logo className="dropdown-icon" />
                                    </button>
                                    <button
                                        onClick={() => onGroupChange("user")}
                                    >
                                        User
                                        <Logo className="dropdown-icon" />
                                    </button>
                                    <button
                                        onClick={() =>
                                            onGroupChange("priority")
                                        }
                                    >
                                        Priority
                                        <Logo className="dropdown-icon" />
                                    </button>
                                </div>
                            </div>
                            {/* <div className="subdropdown-sort">
                                <h3>Sort By</h3>
                                <div className="sort">
                                    <button
                                        onClick={() => onSortChange("priority")}
                                    >
                                        Priority
                                        <Logo className="dropdown-icon" />
                                    </button>
                                    <button
                                        onClick={() => onSortChange("title")}
                                    >
                                        Title
                                        <Logo className="dropdown-icon" />
                                    </button>
                                </div>
                            </div> */}
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}

export default Navbar;
