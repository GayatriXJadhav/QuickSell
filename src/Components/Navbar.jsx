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
                            <div className="dropdown-group">
                                <h3>Grouping</h3>
                                <button onClick={() => onGroupChange("status")}>
                                    Status
                                </button>
                                <button onClick={() => onGroupChange("user")}>
                                    User
                                </button>
                                <button
                                    onClick={() => onGroupChange("priority")}
                                >
                                    Priority
                                </button>
                            </div>
                            <div className="dropdown-sort">
                                <h3>Sort By</h3>
                                <button
                                    onClick={() => onSortChange("priority")}
                                >
                                    Priority
                                </button>
                                <button onClick={() => onSortChange("title")}>
                                    Title
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}

export default Navbar;
