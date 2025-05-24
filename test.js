// Mô phỏng tạo 1 repo mới trên GitHub

function createGitHubRepo(repoName, isPrivate = false) {
    console.log("🔧 Bắt đầu tạo repository mới...");

    // Bước 1: Kiểm tra tên repo
    if (!repoName || repoName.length < 3) {
        console.log("❌ Tên repo không hợp lệ.");
        return;
    }

    // Bước 2: Tạo cấu trúc repo cơ bản
    const repo = {
        name: repoName,
        private: isPrivate,
        createdAt: new Date().toISOString(),
        branches: ["main"],
        files: ["README.md"],
        workflows: [],
    };

    // Bước 3: In kết quả
    console.log(`✅ Đã tạo repo '${repo.name}' (${repo.private ? "Private" : "Public"})`);
    console.log(`📁 Các file mặc định: ${repo.files.join(", ")}`);
    console.log(`🌿 Branch mặc định: ${repo.branches[0]}`);
    console.log(`🕒 Thời gian tạo: ${repo.createdAt}`);

    return repo;
}

// Gọi thử
createGitHubRepo("my-demo-repo", false);
