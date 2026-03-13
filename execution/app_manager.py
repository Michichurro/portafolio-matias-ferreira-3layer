import subprocess
import os
import sys

def run_command(command, cwd):
    print(f"Running: {' '.join(command)} in {cwd}")
    try:
        result = subprocess.run(
            command,
            cwd=cwd,
            shell=True,
            capture_output=True,
            text=True
        )
        
        # Log to .tmp/app_logs.txt
        log_dir = os.path.join(os.getcwd(), ".tmp")
        if not os.path.exists(log_dir):
            os.makedirs(log_dir)
            
        with open(os.path.join(log_dir, "app_logs.txt"), "a") as f:
            f.write(f"--- Command: {' '.join(command)} ---\n")
            f.write(f"STDOUT:\n{result.stdout}\n")
            f.write(f"STDERR:\n{result.stderr}\n\n")
            
        if result.returncode != 0:
            print(f"Error executing command: {result.stderr}")
            return False
            
        print(result.stdout)
        return True
    except Exception as e:
        print(f"Failed to run command: {e}")
        return False

def main():
    if len(sys.argv) < 2:
        print("Usage: python app_manager.py [install|dev|build]")
        return

    action = sys.argv[1].lower()
    app_dir = os.path.join(os.getcwd(), "app")
    
    if action == "install":
        run_command(["npm", "install"], app_dir)
    elif action == "dev":
        print(f"Starting dev server in {app_dir}...")
        subprocess.Popen(
            ["npm", "run", "dev"],
            cwd=app_dir,
            shell=True
        )
        print("Dev server started in background.")
    elif action == "build":
        run_command(["npm", "run", "build"], app_dir)
    else:
        print(f"Unknown action: {action}")

if __name__ == "__main__":
    main()
