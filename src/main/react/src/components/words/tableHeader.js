import React from "react";

export default function tableHeader() {
    return (
        <thead>
        <tr>
            <th scope="col">#</th>
            <th scope="col">The word</th>
            <th scope="col" className="d-lg-none">Word id</th>
            <th scope="col">Added</th>
            <th scope="col">Practiced</th>
            <th scope="col">Last</th>
            <th scope="col">Dictionaries</th>
            <th scope="col">Practice</th>
            <th scope="col">Manage</th>
        </tr>
        </thead>
    )
}