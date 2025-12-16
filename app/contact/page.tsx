export default function Contact() {
  return (
    <div className="container mx-auto">
      <h1>Contact Me</h1>
      <form>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <textarea placeholder="Message"></textarea>
        <button type="submit">Send</button>
      </form>
    </div>
  )
}