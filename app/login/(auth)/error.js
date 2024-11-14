"use client"
export default function ProductErrorBoundary({ error }) {
    return (
      <div>
        <h2>Error loading products</h2>
        <p>{error.message}</p>
      </div>
    );
  }