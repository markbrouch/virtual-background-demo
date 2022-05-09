export default function ({ redirect }) {
  if (!window.OffscreenCanvas) {
    return redirect('/browser-not-supported')
  }
}
