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
const button = document.querySelector("button");
const textarea = document.querySelector("textarea");

button.addEventListener("click", function () {

    const prompt = textarea.value.trim();

    if (prompt === "") {
        alert("Please enter a video prompt.");
        return;
    }

    button.disabled = true;
    button.innerHTML = "Generating...";

    const old = document.getElementById("result");
    if (old) old.remove();

    const result = document.createElement("div");
    result.id = "result";
    result.style.marginTop = "25px";
    result.style.color = "white";
    result.innerHTML = `
        <p>⏳ AI is creating your video...</p>

        <progress id="progress" value="0" max="100" style="width:100%;height:20px;"></progress>

        <br><br>

        <video id="video" width="100%" controls style="display:none;border-radius:10px;">
            <source src="" type="video/mp4">
        </video>

        <br>

        <button id="downloadBtn" style="display:none;margin-top:15px;">
        Download Video
        </button>
    `;

    document.querySelector(".container").appendChild(result);

    let value = 0;

    const timer = setInterval(() => {

        value += 5;

        document.getElementById("progress").value = value;

        if (value >= 100) {

            clearInterval(timer);

            result.innerHTML = `
            <h3>✅ Demo Complete!</h3>

            <p>Your prompt:</p>

            <p><b>${prompt}</b></p>

            <p>This is where the real AI video will appear after we connect Wilfred AI to an AI server.</p>

            <button onclick="alert('Download will work after AI integration.')">
            Download Video
            </button>
            `;

            button.disabled = false;
            button.innerHTML = "Generate AI Video";
        }

    }, 150);

});
