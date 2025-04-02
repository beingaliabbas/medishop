
// Browser-compatible authentication implementation
import Admin from '../models/Admin';
import { connectDB, disconnectDB } from '../utils/db';

const JWT_SECRET = 'your-secret-key'; // In production, use environment variables

// Simple token generation - browser compatible version
function generateToken(payload: any): string {
  const header = { alg: 'HS256', typ: 'JWT' };
  const encodedHeader = btoa(JSON.stringify(header));
  const encodedPayload = btoa(JSON.stringify(payload));
  
  // In a real app, this would use a proper signing algorithm
  // This is a simplified version for demonstration
  const signature = btoa(
    JSON.stringify({ 
      secret: JWT_SECRET, 
      data: encodedHeader + '.' + encodedPayload 
    })
  );
  
  return `${encodedHeader}.${encodedPayload}.${signature}`;
}

// Simple token verification - browser compatible version
function verifySimpleToken(token: string): any | null {
  try {
    const parts = token.split('.');
    if (parts.length !== 3) return null;
    
    // In a real app, we would verify the signature
    // This is a simplified version for demonstration
    const payload = JSON.parse(atob(parts[1]));
    
    // Check if token is expired
    if (payload.exp && payload.exp < Date.now() / 1000) {
      return null;
    }
    
    return payload;
  } catch (error) {
    console.error('Token verification error:', error);
    return null;
  }
}

export async function loginAdmin(username: string, password: string): Promise<string | null> {
  try {
    await connectDB();
    const admin = await Admin.findOne({ username });
    
    if (!admin) {
      return null;
    }
    
    const isMatch = await admin.comparePassword(password);
    
    if (!isMatch) {
      return null;
    }
    
    const payload = {
      id: admin._id,
      username: admin.username,
      exp: Math.floor(Date.now() / 1000) + (24 * 60 * 60) // 1 day expiration
    };
    
    const token = generateToken(payload);
    return token;
  } catch (error) {
    console.error('Login error:', error);
    throw error;
  } finally {
    await disconnectDB();
  }
}

export function verifyToken(token: string): { id: string; username: string } | null {
  return verifySimpleToken(token);
}

// Initialize admin user if not exists
export async function initAdminUser(): Promise<void> {
  try {
    await connectDB();
    const adminExists = await Admin.findOne({ username: 'admin' });
    
    if (!adminExists) {
      const admin = new Admin({
        username: 'admin',
        password: 'admin123' // This will be hashed by the pre-save hook
      });
      
      await admin.save();
      console.log('Admin user created');
    }
  } catch (error) {
    console.error('Error initializing admin user:', error);
  } finally {
    await disconnectDB();
  }
}
