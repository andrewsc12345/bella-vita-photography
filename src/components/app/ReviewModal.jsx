import { useEffect, useRef, useState } from "react";
import { registerReviewModalTrigger } from "./components.jsx";

export function ReviewModal({ googleReviewUrl }) {
  const [isOpen, setIsOpen] = useState(false);
  const resolveDownloadRef = useRef(null);

  useEffect(() => {
    registerReviewModalTrigger(
      () =>
        new Promise((resolve) => {
          resolveDownloadRef.current = resolve;
          setIsOpen(true);
        })
    );

    return () => registerReviewModalTrigger(null);
  }, []);

  function finishPrompt() {
    sessionStorage.setItem("bv_review_prompt_shown", "true");
    setIsOpen(false);

    if (resolveDownloadRef.current) {
      resolveDownloadRef.current();
      resolveDownloadRef.current = null;
    }
  }

  function openGoogleReview() {
    window.open(googleReviewUrl, "_blank", "noopener,noreferrer");
    finishPrompt();
  }

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="bv-review-heading"
      style={styles.overlay}
    >
      <div style={styles.modal}>
        <button
          type="button"
          onClick={finishPrompt}
          aria-label="Close and continue to download"
          style={styles.closeButton}
        >
          ×
        </button>

        <div style={styles.eyebrow}>Before you download</div>

        <h2 id="bv-review-heading" style={styles.heading}>
          Love your Bella Vita photos?
        </h2>

        <p style={styles.message}>
          Sharing your experience in a quick Google review helps Rebecca’s
          small business and helps other families discover Bella Vita
          Photography.
        </p>

        <button
          type="button"
          onClick={openGoogleReview}
          style={styles.reviewButton}
        >
          Leave a Google Review
        </button>

        <button
          type="button"
          onClick={finishPrompt}
          style={styles.continueButton}
        >
          Continue without reviewing
        </button>
      </div>
    </div>
  );
}

const styles = {
  overlay: {
    position: "fixed",
    inset: 0,
    zIndex: 100000,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
    background: "rgba(46, 42, 37, 0.76)",
    backdropFilter: "blur(5px)",
  },

  modal: {
    position: "relative",
    width: "100%",
    maxWidth: "500px",
    padding: "46px 32px 32px",
    borderRadius: "4px",
    background: "var(--card-bg, #ffffff)",
    color: "var(--text, #2e2a25)",
    boxShadow: "0 24px 70px rgba(0, 0, 0, 0.25)",
    textAlign: "center",
    fontFamily: "var(--font-body, sans-serif)",
  },

  closeButton: {
    position: "absolute",
    top: "12px",
    right: "16px",
    padding: "5px",
    border: "none",
    background: "transparent",
    color: "var(--muted, #736d65)",
    fontSize: "30px",
    lineHeight: 1,
    cursor: "pointer",
  },

  eyebrow: {
    marginBottom: "12px",
    color: "var(--accent, #9a7452)",
    fontSize: "0.65rem",
    fontWeight: 500,
    letterSpacing: "0.25em",
    textTransform: "uppercase",
  },

  heading: {
    margin: "0 0 16px",
    fontFamily: "var(--font-display, serif)",
    fontSize: "clamp(1.7rem, 5vw, 2.2rem)",
    fontWeight: 400,
    lineHeight: 1.2,
  },

  message: {
    margin: "0 auto 26px",
    maxWidth: "410px",
    color: "var(--text-light, #5f5952)",
    fontSize: "0.88rem",
    fontWeight: 300,
    lineHeight: 1.75,
  },

  reviewButton: {
    width: "100%",
    padding: "13px 20px",
    border: "none",
    borderRadius: "3px",
    background: "var(--accent, #9a7452)",
    color: "#ffffff",
    fontFamily: "var(--font-body, sans-serif)",
    fontSize: "0.7rem",
    fontWeight: 500,
    letterSpacing: "0.14em",
    textTransform: "uppercase",
    cursor: "pointer",
  },

  continueButton: {
    marginTop: "14px",
    padding: "8px",
    border: "none",
    background: "transparent",
    color: "var(--muted, #736d65)",
    fontFamily: "var(--font-body, sans-serif)",
    fontSize: "0.72rem",
    textDecoration: "underline",
    cursor: "pointer",
  },
};
