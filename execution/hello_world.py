import os
from datetime import datetime

def main():
    print("Executing Layer 3: Hello World Script")
    
    # Ensure .tmp exists
    tmp_path = ".tmp"
    if not os.path.exists(tmp_path):
        os.makedirs(tmp_path)
    
    log_file = os.path.join(tmp_path, "hello_log.txt")
    timestamp = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    
    with open(log_file, "a") as f:
        f.write(f"[{timestamp}] Architecture verification successful.\n")
    
    print(f"Log written to {log_file}")

if __name__ == "__main__":
    main()
