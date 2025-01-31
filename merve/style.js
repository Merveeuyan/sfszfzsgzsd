document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("commentForm");
    const commentList = document.getElementById("commentList");
    const filterSelect = document.getElementById("filterComments");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        
        const rating = document.getElementById("rating").value;
        const commentText = document.getElementById("comment").value.trim();
        const commentType = document.getElementById("commentType").value;

        
        if (!rating || !commentText || !commentType) {
            alert("Lütfen tüm alanları doldurun!");
            return;
        }

        
        addComment(rating, commentText, commentType);

        
        form.reset();
    });

    function addComment(rating, commentText, commentType) {
        const commentBox = document.createElement("div");
        commentBox.classList.add("comment-box");

        
        if (commentType === "Olumlu") {
            commentBox.classList.add("positive");
        } else if (commentType === "Olumsuz") {
            commentBox.classList.add("negative");
        } else {
            commentBox.classList.add("neutral");
        }

        
        commentBox.innerHTML = `
            <p><strong>Puan: ${rating}</strong></p>
            <p>${commentText}</p>
            <p><em>${commentType}</em></p>
            <button class="delete-btn">Sil</button>
        `;

        
        commentBox.querySelector(".delete-btn").addEventListener("click", function () {
            commentBox.remove();
        });

        
        commentList.appendChild(commentBox);
    }

   
    filterSelect.addEventListener("change", function () {
        const selectedFilter = filterSelect.value;
        const comments = document.querySelectorAll(".comment-box");

        comments.forEach(comment => {
            const commentType = comment.querySelector("em").innerText;

            if (selectedFilter === "Tüm Yorumlar" || commentType === selectedFilter) {
                comment.style.display = "block";
            } else {
                comment.style.display = "none";
            }
        });
    });
});