import React from 'react';
import "./styles/AboutPage.css";

export default function AboutPage() {
    return (
        <div className="about-container">
            <h1>About</h1>
            <p>ArtifAI is designed to detect the potential origins of an artwork, whether generated by AI or created by human. It is dedicated to addressing copyright brought by generative artificial intelligence. It also provides gpt-based consultant for querying any copyright issue.</p>
            <p>ArtifAI uniquely combines the power of artificial intelligence with an appreciation for human creativity, offering a robust platform for distinguishing between artworks created by humans and those generated by AI. As we navigate the complexities of copyright in the digital age, ArtifAI emerges as an essential tool for artists and the broader art community.</p>

            <h2>Why ArtifAI</h2>
            <p>With the surge of generative AI in art, the need to safeguard the distinctiveness and copyright of human artists has never been more pressing. ArtifAI embodies this protective shield, ensuring that the authenticity of artworks remains unchallenged in the digital realm.</p>


            <h2>Why It Matters</h2>
            <ul>
                <li>ArtifAI champions the intellectual property rights of artists, promoting an environment where creativity is respected and valued.</li>
                <li>It plays a crucial role in maintaining the authenticity and cultural significance of artworks, ensuring collectors and enthusiasts have access to genuine creations.</li>
                <li>Through innovative technologies like heatmap visualization, ArtifAI demystifies the workings of AI, fostering trust and clarity in the digital art space.</li>
            </ul>

            <p>More than a classification tool, ArtifAI invites the art community to explore the convergence of technology and creativity. It challenges us to consider the future of art in an AI-augmented world and to participate actively in shaping this landscape.</p>


            <h2>How It Works</h2>
            <p>At the heart of ArtifAI lies a convolutional neural network (CNN), designed to dissect and understand the complex visual patterns of artworks. Trained on an extensive dataset of AI-generated and human-made art, including paintings, digital illustrations, and 3D models, the CNN excels in discerning the subtle distinctions between these origins.</p>

            <p>ArtifAI employs advanced image processing to prepare inputs for analysis, standardizing them to a uniform size and format. The CNN then embarks on a detailed examination, leveraging feature extraction to isolate significant visual cues indicative of the artwork's source.</p>

            <p>To enhance transparency and interpretability, ArtifAI incorporates the principle of heatmap visualization through techniques like Gradient-weighted Class Activation Mapping (Grad-CAM). This approach illuminates the specific regions and elements within an artwork that most influence the model's classification decision. By generating these heatmaps, ArtifAI offers an intuitive glimpse into the AI's "thought process," making it easier to understand why a particular piece is identified as either AI-generated or human-made.</p>

            <p>While designed with precision in mind, ArtifAIs technology acknowledges the inherent challenges of this domain, such as the potential for highly realistic art to be classified similarly to photographs. This underscores the ongoing need for refinement and adaptation in our approach.</p>


            <h2>Discover More and Contribute</h2>
            <p>For a deeper dive into ArtifAI's technology or to join our mission, visit our GitHub page. Whether you're drawn to the code, curious about the algorithms, or eager to contribute, we welcome your engagement and support.</p>

            <p>Explore ArtifAI on <a href="https://github.com/AustinBoyuJiang/ArtifAI" target="_blank" rel="noopener noreferrer">GitHub</a> and join us in fostering a future where art and AI coexist harmoniously.</p>
        </div>
    );
}
