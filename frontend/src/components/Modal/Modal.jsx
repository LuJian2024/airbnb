/* eslint-disable react/prop-types */
import "./Modal.css";
import { useState } from "react";

const Modal = ({ isOpen, onClose, title, photo }) => {
  const [hovered, setHovered] = useState(false);
  const [linkCopied, setLinkCopied] = useState(false);

  const handleLinkCopy = () => {
    setLinkCopied(true);
    setTimeout(() => setLinkCopied(false), 3000);
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button
          className="close-button"
          onClick={onClose}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          style={{
            background: hovered ? "#F0F0F0" : "transparent",
            border: "none",
            borderRadius: "50%",
            width: "30px",
            height: "30px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            // position: "absolut",
            // top: "-20px",
            // left: "-20px",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            aria-hidden="true"
            role="presentation"
            focusable="false"
            style={{
              display: "block",
              fill: "none",
              height: "16px",
              width: "16px",
              stroke: "currentcolor",
              strokeWidth: "3",
              overflow: "visible",
              border: "none",
            }}
          >
            <path d="m6 6 20 20M26 6 6 26"></path>
          </svg>
        </button>
        <h1>Share this experience</h1>
        <div className="image-title-container">
          <img
            width="64px"
            height="64px"
            style={{ border: "1px solid transparent", borderRadius: "5px" }}
            src={photo}
            alt="photo"
          />
          <h2>{title}</h2>
        </div>
        <div className="button-container">
          <div className="button-row">
            <button className="btn" onClick={handleLinkCopy}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                aria-hidden="true"
                role="presentation"
                focusable="false"
                style={{
                  display: "block",
                  height: "20px",
                  width: "20px",
                  fill: "currentcolor",
                }}
              >
                <path d="M11.5 3A2.5 2.5 0 0 1 14 5.34v7.16a2.5 2.5 0 0 1-2.34 2.5H6.5A2.5 2.5 0 0 1 4 12.66V5.5A2.5 2.5 0 0 1 6.34 3h5.16zM12 .25v1.5H6a3.25 3.25 0 0 0-3.25 3.07V11h-1.5V5A4.75 4.75 0 0 1 5.78.25H12z"></path>
              </svg>
              {/* <img
                className="btn-icon"
                src="./icons/link-copy-icon.png"
                alt="Link kopieren"
              /> */}
              <span>Copy Link</span>
            </button>
            <button
              className="btn"
              onClick={() =>
                window.open(
                  "mailto:?subject=Betreff&body=Nachrichtentext",
                  "_blank"
                )
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                aria-hidden="true"
                role="presentation"
                focusable="false"
                style={{
                  display: "block",
                  height: "20px",
                  width: "20px",
                  fill: "currentcolor",
                  borderRadius: "20%",
                }}
              >
                <path d="M32 2v28a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2C0 .9.9 0 2 0h28a2 2 0 0 1 2 2z"></path>
                <path
                  fill="#fff"
                  d="M7.01 9.1c-.17 0-.33.03-.48.09l3.01 3.1 3.05 3.15.05.07.1.09.08.09.18.19 2.61 2.68c.04.02.17.14.27.19.13.06.26.12.4.13.16 0 .31-.04.45-.11.1-.05.15-.12.27-.21l3.02-3.13 3.06-3.14 2.94-3.03a1.3 1.3 0 0 0-.62-.16zm-.92.38c-.32.3-.52.76-.52 1.28v10.17c0 .42.13.8.35 1.1l.42-.4 3.15-3.06 2.79-2.7-.06-.07-3.05-3.14L6.1 9.5zm20.33.1-2.98 3.08-3.04 3.14-.06.06 2.9 2.8 3.15 3.06.19.18c.17-.27.26-.6.26-.97V10.76c0-.46-.16-.88-.42-1.18zm-13.79 6.65-2.77 2.7L6.7 22l-.4.39c.21.13.45.22.71.22H25.4c.31 0 .6-.12.83-.31l-.2-.2-3.15-3.06-2.9-2.8-2.61 2.7c-.14.09-.24.19-.38.25-.22.1-.46.2-.7.19-.25 0-.5-.1-.71-.2-.11-.06-.17-.12-.3-.23z"
                ></path>
              </svg>
              <span> Email </span>
            </button>
          </div>
          <div className="button-row">
            <button className="btn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                aria-hidden="true"
                role="presentation"
                focusable="false"
                style={{
                  display: "block",
                  height: "20px",
                  width: "20px",
                  fill: "currentcolor",
                  borderRadius: "20%",
                }}
              >
                <path d="M2 0h28a2 2 0 0 1 2 2v28a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2z"></path>
                <path
                  fill="#fff"
                  d="M15.8 5.47c-6.4 0-11.6 4.32-11.6 9.66 0 3.39 2.14 6.52 5.63 8.27a9.16 9.16 0 0 1-2.02 2.83c1.71-.3 3.33-.93 4.7-1.85 1.07.27 2.18.4 3.29.4 6.4 0 11.6-4.32 11.6-9.65 0-5.34-5.2-9.66-11.6-9.66z"
                ></path>
              </svg>
              <span>Messages</span>
            </button>
            <button
              className="btn"
              onClick={() => window.open("https://web.whatsapp.com", "_blank")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                aria-hidden="true"
                role="presentation"
                focusable="false"
                style={{
                  display: "block",
                  height: "20px",
                  width: "20px",
                  fill: "currentcolor",
                  borderRadius: "20%",
                }}
              >
                <path d="M30 0a2 2 0 0 1 2 2v28a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2z"></path>
                <path
                  fill="#fff"
                  d="m4 28 1.7-6.16a11.82 11.82 0 0 1-1.6-5.95 11.94 11.94 0 0 1 20.4-8.4A11.8 11.8 0 0 1 28 15.9a11.94 11.94 0 0 1-17.67 10.45zm6.63-3.8a9.93 9.93 0 0 0 15.35-8.3A9.9 9.9 0 0 0 16.05 6a9.92 9.92 0 0 0-9.93 9.9c0 2.22.65 3.88 1.75 5.63l-1 3.64 3.76-.98zm11.36-5.52c-.07-.13-.27-.2-.57-.35-.3-.15-1.75-.86-2.03-.96-.27-.1-.46-.15-.66.15s-.77.96-.94 1.16-.35.22-.65.07c-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.48-1.75-1.65-2.04s-.02-.46.13-.6l.44-.52c.15-.17.2-.3.3-.5.1-.2.05-.36-.02-.51-.08-.15-.67-1.6-.92-2.2-.24-.57-.48-.5-.66-.5l-.57-.01c-.2 0-.52.07-.8.37-.27.3-1.03 1.01-1.03 2.46s1.06 2.86 1.2 3.06c.16.2 2.1 3.18 5.08 4.46.7.3 1.26.48 1.69.62.7.22 1.36.19 1.87.11.57-.08 1.75-.71 2-1.4s.25-1.28.17-1.4z"
                ></path>
              </svg>
              <span>WhatsApp</span>
            </button>
          </div>
          <div className="button-row">
            <button
              className="btn"
              onClick={() => window.open("https://www.messenger.com", "_blank")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                aria-hidden="true"
                role="presentation"
                focusable="false"
                style={{
                  display: "block",
                  height: "20px",
                  width: "20px",
                  fill: "currentcolor",
                  borderRadius: "20%",
                }}
              >
                <path d="M30 0a2 2 0 0 1 2 2v28a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2z"></path>
                <path
                  fill="#fff"
                  d="M16 4c6.76 0 12 4.95 12 11.64s-5.24 11.64-12 11.64c-1.22 0-2.38-.16-3.48-.46a.96.96 0 0 0-.51 0l-.12.05-2.39 1.05a.96.96 0 0 1-1.33-.74l-.01-.11-.07-2.14a.97.97 0 0 0-.32-.68A11.39 11.39 0 0 1 4 15.64C4 8.95 9.24 4 16 4zm7.2 8.96c.33-.51-.25-1.09-.75-.8l-.07.04-3.79 2.87a.72.72 0 0 1-.76.07l-.1-.07-2.8-2.1a1.8 1.8 0 0 0-2.52.36l-.09.12-3.52 5.6c-.33.5.26 1.08.75.8l.07-.05 3.79-2.87a.72.72 0 0 1 .77-.07l.1.07 2.8 2.1a1.8 1.8 0 0 0 2.52-.36l.08-.12z"
                ></path>
              </svg>
              <span>Messenger</span>
            </button>
            <button
              className="btn"
              onClick={() => window.open("https://www.facebook.com", "_blank")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                aria-hidden="true"
                role="presentation"
                focusable="false"
                style={{
                  display: "block",
                  height: "20px",
                  width: "20px",
                  fill: "currentcolor",
                  borderRadius: "20%",
                }}
              >
                <path d="M30 0a2 2 0 0 1 2 2v28a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2z"></path>
                <path
                  fill="#fff"
                  d="M22.94 16H18.5v-3c0-1.27.62-2.5 2.6-2.5h2.02V6.56s-1.83-.31-3.58-.31c-3.65 0-6.04 2.21-6.04 6.22V16H9.44v4.62h4.06V32h5V20.62h3.73z"
                ></path>
              </svg>
              <span>Facebook</span>
            </button>
          </div>
          <div className="button-row">
            <button
              className="btn"
              onClick={() => window.open("https://twitter.com", "_blank")}
            >
              <svg
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="presentation"
                focusable="false"
                style={{
                  display: "block",
                  height: "20px",
                  width: "20px",
                  fill: "currentcolor",
                  borderRadius: "20%",
                }}
              >
                <g>
                  <path d="m4 0h24c2.209139 0 4 1.790861 4 4v24c0 2.209139-1.790861 4-4 4h-24c-2.209139 0-4-1.790861-4-4v-24c0-2.209139 1.790861-4 4-4z"></path>
                  <path
                    d="m18.2761344 14.1623621 8.7424253-10.1623621h-2.071675l-7.5910467 8.8238362-6.0629468-8.8238362h-6.9928912l9.1683652 13.3432031-9.1683652 10.6567969h2.07179236l8.01634094-9.318271 6.4029159 9.318271h6.9928912l-9.5083148-13.8376379zm-2.8376036 3.2983977-.9289464-1.3286822-7.39129628-10.57246215h3.18215218l5.9648622 8.53231435.9289464 1.3286823 7.7536143 11.0907018h-3.1821522l-6.3271802-9.0500453z"
                    fill="#fff"
                  ></path>
                </g>
              </svg>
              <span>Twitter</span>
            </button>
          </div>
        </div>
        {linkCopied && (
          <div className="link-copied-notification">
            {/* SVG for notification icon */}
            <span>✅ Link copied</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;
