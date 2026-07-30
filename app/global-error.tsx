"use client";

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body style={{ background: "#0A1628", color: "white" }}>
        <div
          style={{
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            padding: "24px",
            fontFamily: "sans-serif",
          }}
        >
          <p style={{ color: "#3FD0FF", fontSize: "14px" }}>Site error</p>
          <h1 style={{ fontSize: "28px", fontWeight: 600, marginTop: "8px" }}>
            Something went wrong
          </h1>
          <button
            onClick={reset}
            style={{
              marginTop: "24px",
              background: "#00629B",
              color: "white",
              border: "none",
              borderRadius: "999px",
              padding: "12px 24px",
              fontSize: "14px",
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            Reload
          </button>
        </div>
      </body>
    </html>
  );
}
