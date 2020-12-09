export function nameExtract(name) {
  if (name != null) {
    let fullname = name.trim();
    let x = fullname.lastIndexOf(" ");
    let firstname = fullname.slice(0, x);
    let lastname = fullname.slice(x + 1, fullname.length);
    return [firstname, lastname];
  } else {
    return console.error("error");
  }
}

export function blob2Image(blob) {
  return `data:image/jpeg;base64,${blob}`;
}
