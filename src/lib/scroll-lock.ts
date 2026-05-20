/** Bloqueio de scroll compartilhado — evita body preso quando menu + modal competem */
let lockCount = 0;
let scrollY = 0;

function applyScrollLock() {
  scrollY = window.scrollY;
  document.body.style.position = "fixed";
  document.body.style.top = `-${scrollY}px`;
  document.body.style.left = "0";
  document.body.style.right = "0";
  document.body.style.width = "100%";
  document.body.style.overflow = "hidden";
}

function releaseScrollLock() {
  document.body.style.position = "";
  document.body.style.top = "";
  document.body.style.left = "";
  document.body.style.right = "";
  document.body.style.width = "";
  document.body.style.overflow = "";
  window.scrollTo(0, scrollY);
}

export function lockBodyScroll() {
  if (typeof document === "undefined") return;
  if (lockCount === 0) {
    applyScrollLock();
  }
  lockCount += 1;
}

export function unlockBodyScroll() {
  if (typeof document === "undefined") return;
  if (lockCount <= 0) {
    lockCount = 0;
    return;
  }
  lockCount -= 1;
  if (lockCount === 0) {
    releaseScrollLock();
  }
}

/** Recupera scroll se algum overlay deixou o body preso */
export function resetBodyScroll() {
  if (typeof document === "undefined") return;
  const wasLocked = lockCount > 0;
  lockCount = 0;
  if (wasLocked) {
    releaseScrollLock();
  } else {
    document.body.style.position = "";
    document.body.style.top = "";
    document.body.style.left = "";
    document.body.style.right = "";
    document.body.style.width = "";
    document.body.style.overflow = "";
  }
}
