import http.client
import sys
import time

def check_search_functionality():
    conn = http.client.HTTPConnection("localhost", 3002, timeout=10)

    try:
        # Check main page for search box
        print("Checking main page for search functionality...")
        conn.request("GET", "/")
        response = conn.getresponse()
        data = response.read().decode()

        # Also check for flexsearch configuration
        conn.request("GET", "/_next/static/chunks/pages/_app.js")
        app_response = conn.getresponse()
        app_data = app_response.read().decode()

        search_indicators = [
            'nextra-search',
            'Search documentation',
            'flexsearch'
        ]

        found_indicators = []
        for indicator in search_indicators:
            if indicator in data or indicator in app_data:
                found_indicators.append(indicator)
                print(f"✓ Found '{indicator}' in the application")
            else:
                print(f"✗ Could not find '{indicator}' in the application")

        # Check if we found all required elements
        if len(found_indicators) == len(search_indicators):
            print("\nSuccess: Search functionality appears to be properly configured!")
            return True
        else:
            print("\nWarning: Some search elements are missing.")
            return False

    except Exception as e:
        print(f"Error: {str(e)}")
        return False
    finally:
        conn.close()

if __name__ == "__main__":
    print("Starting search functionality verification...")
    success = check_search_functionality()
    sys.exit(0 if success else 1)
