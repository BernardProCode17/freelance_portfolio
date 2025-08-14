export default function ContactForm(){

    return (
        <form className="FP-Inquiry-form">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />

            <label htmlFor="projectType">Project Type:</label>
            <select id="projectType" name="projectType" required>
                <option value="">Select a type</option>
                <option value="land">Landing Page</option>
                <option value="static">Static Website</option>
                <option value="SMW">Small Business Website</option>
                <option value="Dynamic">Dynamic Web App</option>
            </select>

            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows="4" required></textarea>

            <button type="submit">Send Message</button>
        </form>
    )
}