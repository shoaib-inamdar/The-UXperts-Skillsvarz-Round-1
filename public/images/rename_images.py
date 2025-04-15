import os
import re

# Use the current directory
folder = os.getcwd()

# Get all files in the current folder
files = os.listdir(folder)

# Sort to make sure frame_0001 ➝ 1, etc.
files = sorted(files)

# Pattern to match frame_0001.webp, etc.
pattern = re.compile(r"frame_(\d{4})\.webp")

for file in files:
    match = pattern.match(file)
    if match:
        number = int(match.group(1))  # Convert '0001' ➝ 1
        new_filename = f"{number}.webp"
        old_path = os.path.join(folder, file)
        new_path = os.path.join(folder, new_filename)

        # Rename file
        os.rename(old_path, new_path)
        print(f"✅ Renamed: {file} ➝ {new_filename}")
    else:
        print(f"⏭️ Skipped: {file} (no match)")
