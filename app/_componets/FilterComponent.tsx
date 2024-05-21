"use client";
import React, { useState } from "react";
import { Node } from "../../types";
import { DATA } from "../../data";

const FilterComponent: React.FC = () => {
  const [filterTags, setFilterTags] = useState<string[]>([]);

  const handleTagChange = (tag: string) => {
    setFilterTags((prevTags) =>
      prevTags.includes(tag)
        ? prevTags.filter((t) => t !== tag)
        : [...prevTags, tag]
    );
  };

  const filteredDATA = DATA.filter((node) =>
    filterTags.length > 0
      ? filterTags.every((filterTag) =>
          node.tags.map((tag) => tag.slug).includes(filterTag)
        )
      : true
  );

  return (
    <div>
      <h1>Filter Component</h1>
      <div>
        <button onClick={() => handleTagChange("tag1")}>Tag 1</button>
        <button onClick={() => handleTagChange("tag2")}>Tag 2</button>
        <button onClick={() => handleTagChange("tag3")}>Tag 3</button>
      </div>
      <ul>
        {filteredDATA.map((node) => (
          <li key={node.id}>{node.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default FilterComponent;
