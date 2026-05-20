/** Bloqueio de scroll compartilhado — evita body preso quando menu + modal competem */
let lockCount = 0;
let previousOverflow = "";

export function lockBodyScroll() {
  if (typeof document === "undefined") return;
  if (lockCount === 0) {
    previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
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
    document.body.style.overflow = previousOverflow || "";
    previousOverflow = "";
  }
}

/** Recupera scroll se algum overlay deixou o body preso */
export function resetBodyScroll() {
  if (typeof document === "undefined") return;
  lockCount = 0;
  document.body.style.overflow = "";
  previousOverflow = "";
}
