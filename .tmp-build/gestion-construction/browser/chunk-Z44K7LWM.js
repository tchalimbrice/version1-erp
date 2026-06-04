// projects/gestion-construction/src/app/utils/invite.ts
function base64UrlEncodeBytes(bytes) {
  let binary = "";
  for (let i = 0; i < bytes.length; i++)
    binary += String.fromCharCode(bytes[i]);
  const base64 = btoa(binary);
  return base64.replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/g, "");
}
function base64UrlDecodeToBytes(input) {
  const base64 = input.replace(/-/g, "+").replace(/_/g, "/");
  const padded = base64 + "===".slice((base64.length + 3) % 4);
  const binary = atob(padded);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++)
    bytes[i] = binary.charCodeAt(i);
  return bytes;
}
function encodeInvite(payload) {
  const json = JSON.stringify(payload);
  const bytes = new TextEncoder().encode(json);
  return base64UrlEncodeBytes(bytes);
}
function decodeInvite(raw) {
  try {
    const bytes = base64UrlDecodeToBytes(raw.trim());
    const json = new TextDecoder().decode(bytes);
    const parsed = JSON.parse(json);
    if (!parsed || parsed.v !== 1 || parsed.domain !== "gestion-construction")
      return void 0;
    if (!parsed.company || !parsed.user || !parsed.mode)
      return void 0;
    return parsed;
  } catch {
    return void 0;
  }
}
function buildInviteLink(token, baseUrl) {
  const root = baseUrl.replace(/\/$/, "");
  return `${root}/connexion?invite=${encodeURIComponent(token)}`;
}

export {
  encodeInvite,
  decodeInvite,
  buildInviteLink
};
//# sourceMappingURL=chunk-Z44K7LWM.js.map
